import nodemailer from 'nodemailer';

export const sendEmail = async (landLord: string | undefined) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'jishan1873@gmail.com',
        pass: 'hrer gfrj jwkr gkwq', // Use Google App Password
      },
    });

    const info = await transporter.sendMail({
      from: 'jishan1873@gmail.com',
      to: landLord,
      subject: 'A Rental Request',
      text: 'A Request for your house',
      html: '<b>Hello world?</b>',
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
