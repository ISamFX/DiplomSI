import styled from "./style.module.scss"
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"
import { FC } from "react";

import { UseFormRegister, UseFormSetValue } from "react-hook-form"
import { FilterData } from "../../redux/sneakers/sneakSlice"

interface IProps  {
  setValue: UseFormSetValue<FilterData>;
  register: UseFormRegister<FilterData>;
}

const PriceFilter: FC<IProps> = ({ register, setValue }) => {
  return (
    <>  
      <div className={styled.range_display}>
        <div className={styled.catalog_range_price}>
        <input className={styled.input_form_first} 
               type="number" min={0} max={59998} {...register("minPrice")} />
        <input className={styled.input_form_first} 
               type="number" min={1} max={59999} {...register("maxPrice")} />
        <Nouislider className={styled.noUi}
          range={{ min: 0, max: 59999 }}
          start={[1000, 59999]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([minPrice, maxPrice]) => {
            setValue("minPrice", Math.round(minPrice));
            setValue("maxPrice", Math.round(maxPrice));
          }}
        /> 
        </div>  
      </div>
    </>  

  );
};

export default PriceFilter;
