import prismaClient from "../../prisma";

interface ItemRequest{
    product_id: string;
    order_id: string;
    amount: number;
}

class AddItemService{
    async execute({product_id, order_id, amount}: ItemRequest){

        const order = await prismaClient.orderItem.create({
            data:{
                product_id: product_id,
                order_id: order_id,
                amount: amount
            }
        })

        return order;

    }
}

export { AddItemService };