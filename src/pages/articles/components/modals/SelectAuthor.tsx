import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import Medic from "~/interfaces/Medic.type";
import { FaHandHoldingMedical } from "react-icons/fa";
import { Author, IArticle } from "~/interfaces/Article.interface";
import { getAuthors } from "~/service/authors.service";

interface IProps {
  data: Author[];
  getAuthor: (article: IArticle) => void;
}

function SelectAuthor({ data }: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [onError, setOnError] = useState<boolean>(false);
  const [authors, setAuthors] = useState<Author[]>([] as Author[]);

  const fetchAuthors = async () => {
    try {
      setIsLoading(true);
      const dataAuthors = await getAuthors();
      setAuthors(dataAuthors.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setOnError(true);
      setAuthors([]);
    }
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<Author | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClear = () => {
    setSelected(null);
  };
  const handleSearch = (inputValue: string) => {
    if (!open) {
      setInputValue("");
    } else {
      setInputValue(inputValue);
    }
  };
  const handleSelect = (author: Author | null) => {
    setSelected(author);
    setOpen(false);
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  useEffect(() => {
    handleSelect(selected);
    console.log("selected", selected);
  }, [selected]);

  useEffect(() => {
    handleSearch(inputValue);
  }, [open]);

  return (
    <div className="col-span-2 h-auto w-full">
      <div className="flex items-center justify-center rounded-lg border border-indigo-600 shadow-md ">
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleClear();
            event.stopPropagation();
          }}
        >
          <AiFillCloseCircle
            size={20}
            className="mx-2 text-indigo-600 hover:text-indigo-400 active:text-indigo-700"
          />
        </button>
        <div
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center justify-between rounded bg-white p-2 ${
            !selected && "text-gray-700"
          }`}
        >
          {selected
            ? selected.mention + " " + selected.full_name + " - " + selected.speciality
            : "Selecciona un Autor"}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <button className="m-2 rounded-lg border border-indigo-600 bg-indigo-200 p-1 text-indigo-600">
          <FaHandHoldingMedical size={30} />
        </button>
      </div>
      <ul className={`mt-2 overflow-y-auto bg-white ${open ? "max-h-60" : "peer hidden"} `}>
        <div className="sticky top-0 flex items-center bg-white px-2">
          <AiOutlineSearch size={20} className="text-violet-600" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Medic Name"
            className="p-2 outline-none placeholder:font-sans placeholder:text-violet-700"
          />
        </div>
        {authors.length === 0 ? (
          authors.map((author: Author) => (
            <li
              key={author.id}
              className={`p-2 text-sm hover:bg-fuchsia-600 hover:text-white
            ${
              (author.full_name.toLowerCase() === selected?.full_name.toLowerCase() ||
                author.full_name.toLowerCase() === selected?.full_name.toLowerCase()) &&
              "bg-fuchsia-600 text-white"
            }
            
            ${
              author.full_name.toLowerCase().startsWith(inputValue) ||
              author.mention.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
              onClick={() => {
                if (
                  author.full_name.toLowerCase() !== selected?.full_name.toLowerCase() ||
                  author.mention.toLowerCase() !== selected?.mention.toLowerCase()
                ) {
                  setSelected(author);
                  setOpen(false);
                  setInputValue("");
                }
              }}
            >
              {author.mention + " " + author.full_name + " - " + author.speciality}
            </li>
          ))
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </ul>
    </div>
  );
}

export default SelectAuthor;
