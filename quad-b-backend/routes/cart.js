import Router from "express";
import {getCart, addItemToCart, removeItemFromCart} from "../controllers/cartController.js";
import {protect} from "../middlewares/auth.js";


const router = Router();

router.route('/').get(protect, getCart).post(protect, addItemToCart);
router.route('/:id').delete(protect, removeItemFromCart);

export default router;
