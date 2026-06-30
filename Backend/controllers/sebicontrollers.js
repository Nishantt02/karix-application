import { sendToKarix } from "../services/karixService.js";

export const sendProcessVariables = async (req, res, next) => {

    try {

        const result = await sendToKarix(req.body);

        res.status(200).json({

            success: true,

            message: "Request Sent Successfully",

            data: result

        });

    } catch (error) {

        next(error);

    }

};