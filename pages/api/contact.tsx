import { mailOptions, transporter } from "@/lib/utils/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const contactUs = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: req.body.Name + " from " + req.body.Email,
        text: `Type: ${req.body.Type}\nQuantity: ${req.body.Quantity}\n${
          req.body.Message ?? "no Message"
        }`,

        html: `Type: ${req.body.Type}<br>Quantity: ${
          req.body.Quantity
        }<br><br>${req.body.Message ?? "no Message"}`,
      });
      return res.status(200).send("Email sent successfully");
    } catch (error: any) {
      console.log(error);
      return res.status(400).send({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default contactUs;
