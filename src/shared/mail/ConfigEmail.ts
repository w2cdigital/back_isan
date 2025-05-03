/* eslint-disable prefer-const */
import sgMail from '@sendgrid/mail';
import { injectable } from 'tsyringe';

@injectable()
class ConfigEmail {
  async sendEmail(
    to: string,
    from: { name: string; email: string },
    subject: string,
    text: string,
    html: string,
  ) {
    sgMail.setApiKey(process.env.SENDGRIND_KEY);

    const msg = {
      to,
      from,
      subject,
      text,
      html,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  createMessage<T extends { [key: string]: any }>(
    dataObj: T,
    textToConvert: string,
  ): string {
    let text = textToConvert;

    Object.keys(dataObj).forEach((item) => {
      text = text.replaceAll(`{{${item}}}`, `${dataObj[item]}`);
    });

    return text;
  }
}

export { ConfigEmail };
