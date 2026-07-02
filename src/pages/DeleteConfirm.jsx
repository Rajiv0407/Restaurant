function DeleteConfirm({ onConfirm, onCancel }) {
  return (
    <div className="overlay">
      <div className="popup">
        <h3>Delete item</h3>

        <p>Are you sure you want to delete this product?</p>
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteConfirm;