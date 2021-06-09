import React from "react";
import { useState } from "react";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { Modal } from "@material-ui/core";
import { Element, scroller } from "react-scroll";
import { sidebarItem, lists } from "./data";
import { RiCloseLine } from "react-icons/ri";
import { setItemToolboxClick } from "../../../app/slice/ui";

import ImportModal from "../ImportModal/index";

const AddBlockModal = ({ open, onClose, setAddBlockModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isOpenHttpModal, setIsOpenHttpModal] = useState(false);
  // const [elements, setElements] = useState(initialElements);

  const handleOnClickBlock = (blockID) => {
    switch (blockID) {
      case "file":
        setIsOpenImportModal(true);
        break;

      case "httpRequest":
        setIsOpenHttpModal(true);
        break;

      default:
        const action = setItemToolboxClick(blockID);
        dispatch(action);
        setAddBlockModal(false);
        break;
    }
  };

  const handleCloseImportModal = () => {
    setIsOpenImportModal(false);
  };

  const scrollToCategory = (id) => {
    scroller.scrollTo(`${id}`, { smooth: true, duration: 1000 });
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={onClose}
    >
      <div className={classes.modal}>
        <div className={classes.closeIcon} onClick={onClose}>
          <RiCloseLine className={classes.close} />
        </div>
        <div className={classes.sidebar}>
          <h2>Toolbox</h2>
          <input
            type="text"
            className={classes.input}
            placeholder="Search..."
          />
          <aside className={classes.sidebarMenu}>
            <ul>
              {sidebarItem.map((item) => (
                <li
                  onClick={() => scrollToCategory(item.id)}
                  className={classes.sidebarItem}
                  key={item.id}
                >
                  <div className={classes.icon}>{item.icon}</div>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className={classes.lists}>
          {lists.map((items) => (
            <Element name={items.id} key={items.id}>
              <div className={classes.category}>
                <h2>{items.name}</h2>
                <div className={classes.blocks}>
                  {items.children.map((item) => (
                    <div
                      className={classes.block}
                      onClick={() => handleOnClickBlock(item.id)}
                      key={item.id}
                    >
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <div>
                        <p>Input: {item.input}</p>
                        <p>Output: {item.output}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Element>
          ))}
          <div>
            {isOpenImportModal && (
              <ImportModal
                open={isOpenImportModal}
                onClose={handleCloseImportModal}
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddBlockModal;
