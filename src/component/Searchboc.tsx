import React from 'react';
import { IoSearch } from "react-icons/io5";

type Props = {
    classname?:string;
    value:string;
    onSubmit:React.FormEventHandler<HTMLFormElement> | undefined;
    onChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function Searchboc(props: Props) {
  return (
    <form onSubmit={props.onSubmit} className="flex relative items-center justify-center h-8 ">
        <input 
        value={props.value}
        type='text'
        onChange={props.onChange}
        placeholder="Search Location..."
        className="border-gray-500 h-full focus:outline-none px-2 w-60 border-2 rounded-l
        focus:border-blue-300" />
        <button className="bg-blue-300 h-full w-8 rounded-r flex items-center justify-center
        text-white hover:bg-blue-400">
        <IoSearch />
        </button>
    </form>

  )
}
