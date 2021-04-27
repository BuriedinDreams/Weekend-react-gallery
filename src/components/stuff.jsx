switch(changeUserNameView) {
  case 'edit':
    return (
      <div>
        <h1>Edit your profile</h1>
        <label htmlFor="editUserName">Change username</label>
        <input
          type="text"
          id="editUserName"
          defaultValue={newUserName}
          onChange={(event) => setNewUserName(event.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
        {/* <DropzoneS3Uploader /> */}
      </div>
    )
    default:
        return (
      <div>
        <h1>Edit your profile</h1> <div>
          {newUserName}
          <button onClick={handleEditButton}>Change username</button>
        </div>
        <button onClick={deleteButton}>Delete profile</button>
        <Link className="navLink" to='/homePage'>Cancel</Link>
      </div>
    )
}