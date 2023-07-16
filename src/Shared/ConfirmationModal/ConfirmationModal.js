import React from "react";

const ConfirmationModal = ({title,successBtnName, description,modalData, closeModal,successAction}) => {
  return (
    <div>
    
                <input type="checkbox" id="confirmationModal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{description}</p>
                    <div className="modal-action">
                    <button onClick={closeModal}  className="btn btn-error btn-outline">Cancel</button>
                    <label htmlFor="confirmationModal" onClick={() =>successAction(modalData)} className="btn btn-outline btn-success ">{successBtnName}</label>
                    </div>
                </div>
                </div>
    </div>
  );
};

export default ConfirmationModal;
