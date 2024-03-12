import { Request, Response } from "express";
import { RemoverOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController{
    async handle(req:Request, res: Response){

        const order_id = req.query.order_id as string;
        
        const removeOrderService = new RemoverOrderService();

        const order = await removeOrderService.execute({
            order_id
        });

        return res.json(order);
    }
}

export { RemoveOrderController };