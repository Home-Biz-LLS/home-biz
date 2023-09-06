import React from "react";

type ConfirmDeleteProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDelete: React.FC<ConfirmDeleteProps> = (props) => {
  const {isOpen, title, message, onConfirm, onCancel} = props

  if (!isOpen) {return null}

  return (
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>);
};

export default ConfirmDelete;
