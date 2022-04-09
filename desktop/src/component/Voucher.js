import React from 'react'


const Voucher = (props) => {
    return(
    <div className="rounded-lg overflow-hidden">
        <div className="containerGrid pt-6 pb-6">
            <div className="grid grid-cols-2 gap-16  place-items-end">
                <div className="rounded-lg overflow-hidden">
                    <img src={props.food} alt="product" width="260px" className="rounded-2xl"/>
                    <div className="px-6 py-4">
                        <div className="font-mono text-white font-bold text-xl mb-2">{props.title}</div>
                        <p className="font-mono text-white text-sm">
                            {props.text}
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <img width="200px" src={props.image} alt="qr-code"/>
                    <div className="codeWrapper">
                        <div className="font-mono text-white font-bold text-xl">{props.vouchers} Vouchers left</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Voucher;