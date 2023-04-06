module.exports = async function archiveThisSession(params) {
    /*
    This function does the following:
    - moves the current open file to "Previous Session Notes"
    - deletes the folder it was in (ex: "S83 2023-03-28 Nogvurot Partings")
    */
    const targetFolder = "/Wildemount/_Tues Wildemount DM Notes/Previous Session Notes";
    const tfile = params.app.workspace.getActiveFile();
    console.log(tfile);
    console.log(`${targetFolder}/${tfile}`)
    const parentFolder = tfile.parent;
    await app.fileManager.renameFile(
        tfile,
        `${targetFolder}/${tfile.name}`
    );
    await app.vault.delete(parentFolder);
};