import * as React from 'react';

export interface SpanText extends React.InputHTMLAttributes<HTMLInputElement> {
    text1: string;
    text2: React.ReactNode;
    text3: string;
    text4: string;
}

const SpanText: React.FC<SpanText> = ({ text2, text1, text3, text4, ...props }) => {
    return (
        <div className="edu">
            {/* <p className='lg:text-[15px] text-[13px] font-semibold mb-2'>Higher Secondary</p> */}
            <div className="content flex flex-col lg:flex-row lg:text-[15px] text-[12px]">
                <div className="part1 flex flex-col lg:w-1/2 ">
                    <span>{text1} <span className="text-slate-500">{text2}</span></span>
                </div>
                <div className="part2 flex flex-col lg:pl-3 justify-end lg:w-1/2">
                    <span>{text3} <span className="text-slate-500">{text4}</span></span>
                </div>
            </div>
        </div>

        // <div className="edu">
        //     {/* <p className='lg:text-[15px] text-[13px] font-semibold mb-2'>Higher Secondary</p> */}
        //     <div className="content flex flex-col lg:flex-row lg:text-[16px] text-[11px] ">
        //         <div className="part1 flex flex-col">
        //             <span>Institute Name: Rakib Ahsan</span>
        //         </div>
        //         <div className="part2 flex flex-col justify-end lg:pl-3">
        //             <span>Curriculum: Rakib Ahsan</span>
        //         </div>
        //     </div>
        // </div>


    );
};

export default SpanText;
