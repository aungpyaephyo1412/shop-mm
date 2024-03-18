"use client"
import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {Toaster} from "@/components/ui/toaster";

const Providers = ({children}:{children : ReactNode}) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster />
        </Provider>
    );
};

export default Providers;