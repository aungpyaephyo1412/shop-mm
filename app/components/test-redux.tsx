'use client'
import {decrement, increment, selectCount} from "@/redux/slices/counterSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/redux";

const TestRedux = () => {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()
    const inc = ()=>dispatch(increment())
    const dec = ()=>dispatch(decrement())
    return (
        <div className="w-full h-screen flex justify-center items-center text-lg font-semibold space-x-5">
            <button onClick={inc}>+</button>
            <div>{count}</div>
            <button onClick={dec}>-</button>
        </div>
    );
};

export default TestRedux;