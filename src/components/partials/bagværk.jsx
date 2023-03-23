import axios from "axios";
import {useEffect, useState} from "react";
import { Bagværkstyle } from "./bagværk.style";
import { Bagværkcard } from "./bagværkcard";

export const Bagværk = () => {
    const url = "https://api.mediehuset.net/bakeonline/products";
    const [bagværk, setBagværk] = useState([]);
    useEffect(() => {
        axios.get(url).then((data) => {
            console.log(data.data.items);
            setBagværk(data.data.items.slice(0, 6));
        });
    }, []);

    return (
        <Bagværkstyle>
            <div className="grid">
                {bagværk.map((data, i) =>
                    <Bagværkcard data={data} key={i}/>
                )}
            </div>            
        </Bagværkstyle>
    );
};