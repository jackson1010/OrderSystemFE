import { Button } from "@/components/ui/button";
import { addCarts, deleteCarts, getCarts } from "@/data/action";
import { useDispatch, useSelector } from "react-redux";

const SampleReduxSagaAxios = () => {
  const dispatch = useDispatch();
  const carts: string[] = useSelector((state: any) => state.cartsReducer);
  console.log(carts);

  return (
    <div className="p-2">
      <h1 className="mb-4 text-lg font-bold">Sample Redux</h1>

      <Button className="mr-2" onClick={() => dispatch(getCarts())}>
        Sample Get
      </Button>
      <Button className="mr-2" onClick={() => dispatch(addCarts("apple"))}>
        Sample Add
      </Button>
      <Button className="mr-2" onClick={() => dispatch(deleteCarts())}>
        Sample Delete
      </Button>
      <br />
      {carts.map((cart, i) => (
        <li key={i}>{cart}</li>
      ))}
    </div>
  );
};

export default SampleReduxSagaAxios;
