import React from 'react'
import Voucher from './Voucher.js'
import Pizza from './img/pizza.svg'
import Pie from './img/pie.svg'

const VouchersGrid = () => {
    const text = "rules";
    const image = "https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png";
    const vouchers = 32;
    const vouchers2 = 16;
    return(
        <div className="containerGrid pb-6 bg-transparent">
            <div className=" grid grid-cols-1 bg-transparent">

                    <Voucher text={text} title="Slice of goodness" image ={image} food={Pizza} vouchers={vouchers}/>
                    <Voucher text={text} title="Pie of goodness" image ={image} food={Pie} vouchers={vouchers2}/>


            </div>
        </div>
    );
};
export default VouchersGrid;