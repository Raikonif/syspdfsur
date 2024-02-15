import React, { ReactElement, useState } from "react";
import ModalCreateArticle from "~/pages/articles/ModalCreateArticle";

function ArticlesPage(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const refModalCreate = React.useRef<HTMLDivElement>(null);
  const handleModalCreate = (newState: boolean) => {
    setShowModal(newState);
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(!showModal)}
        className="rounded-md bg-indigo-600 p-2 text-white"
      >
        <p>Crear Artículo</p>
      </button>
      {showModal && <ModalCreateArticle onClose={handleModalCreate} refModal={refModalCreate} />}
    </div>
  );
}

export default ArticlesPage;
