import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type SubjectType = 'math' | 'hebrew' | 'both' | 'other';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, childAge, subject, message } = body;

    // לוודא שכל השדות הנדרשים נשלחו
    if (!name || !phone || !childAge || !subject) {
      return NextResponse.json(
        { error: 'חסרים שדות חובה' },
        { status: 400 }
      );
    }

    // יצירת transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // המרת ערך הנושא לטקסט קריא
    const subjectMap: Record<SubjectType, string> = {
      math: 'מתמטיקה',
      hebrew: 'עברית',
      both: 'מתמטיקה ועברית',
      other: 'אחר'
    };
    const subjectText = subjectMap[subject as SubjectType] || subject;

    // תוכן המייל המעוצב
    const htmlContent = `
      <div style="direction: rtl; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #4361ee; text-align: center; border-bottom: 2px solid #4361ee; padding-bottom: 10px;">פנייה חדשה מאתר לב ללמידה</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>שם:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>טלפון:</strong> ${phone}</p>
          <p style="margin: 10px 0;"><strong>גיל הילד/ה:</strong> ${childAge}</p>
          <p style="margin: 10px 0;"><strong>תחום לימוד:</strong> ${subjectText}</p>
          ${message ? `<p style="margin: 10px 0;"><strong>הודעה:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        </div>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-top: 20px;">
          <p style="margin: 0; color: #666;">ניתן להשיב לפונה בטלפון: ${phone}</p>
        </div>
      </div>
    `;

    // אפשרויות המייל
    const mailOptions = {
      from: `לב ללמידה <${process.env.MAIL_USER}>`,
      to: 'ilanit.leibovich@gmail.com',
      subject: `פנייה חדשה מ${name} - ${subjectText}`,
      html: htmlContent,
    };

    // שליחת המייל
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('שגיאה בשליחת המייל:', error);
    return NextResponse.json(
      { error: 'אירעה שגיאה בשליחת המייל' },
      { status: 500 }
    );
  }
} 