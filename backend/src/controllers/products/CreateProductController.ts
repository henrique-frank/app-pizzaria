import { Response, Request } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        
        const createProductService = new CreateProductService();

        const { name, price, description, category_id} = req.body;

    if(!req.file){
        throw new Error("error uploading file")
    }else{

        const { originalname, filename: banner } = req.file;

        const product = await createProductService.execute({

            name,
            price,
            description,
            category_id,
            banner

        });
        
        return res.json(product);
    }
}


} export { CreateProductController }; 