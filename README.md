This vault showcases two QuickAdd commands:
- `QuickAdd: Archive & new session`, which copies the last session note to the `Previous Session Notes` folder and increments the new session folder and note for the new game.
- `QuickAdd: Update with title`, which lets you quickly update frontmatter and the parent folder for a session note you're adding a title to.


> [!note] This is structure-dependent
> This was created with the specific sample structure as shown in the `Wildemount` folder. Any changes to this structure will cause scripts to stop working.


## Archive & new session

### How to use it

1. Hit `CMD+P` to open the Command Palette.
2. Select `QuickAdd: Archive & new session` and hit enter.

You can also assign the command a hotkey in Settings > Hotkeys so that you can just use a keyboard shortcut instead of the previous two steps.

### What it does

The `QuickAdd: Archive & new session` command does the following things:
- looks for all files/folders in the notes folder (`Wildemount/_Tues Wildemount DM Notes`) other than `00 Previous Session Lister` and `Previous Session Notes`
- copies those folders to the `Previous Session Notes` folder, along with their contents
- gets the last game number from the `Previous Session Notes` folder and adds 1 to it to get the new game number
- renames the current session folder to include the new session number and today's date
- renames the session file within the session folder with the new session number and today's date

## Update with title

### How to use it

1. Click on a session note (such as `S83 2023-04-11 Leaky Cucumber`) to open it.
2. Change the filename of the note.
3. Hit CMD+P to open the Command Palette.
4. Select `QuickAdd: Update with title` and hit enter.

You can also assign the command a hotkey in Settings > Hotkeys so that you can just use a keyboard shortcut instead of the previous two steps.


### What it does

The `QuickAdd: Update with title` command does the following things:
- updates the `date` and `episode` frontmatter properties of the current file
- renames the parent folder to the current note's title

## How to use this in your own vault

1. Take a backup of your vault.
2. Copy the five scripts in `Scripts` to a Scripts folder in your own vault.
3. Install and enable the Dataview plugin.
4. Install and enable QuickAdd plugin.
5. Copy the `.obsidian/plugins/quickadd` folder from this vault into the same directory on your vault. 
   
> [!warning] This deletes existing QuickAdd data
>    This will delete all your other QuickAdd macros and settings, so only do this if you don't mind that happening. If you do, replicate the QuickAdd macros and commands set up in this vault on your vault manually.

4. (Optional) Set up hotkeys for the two macros so you don't have to look for them in the Command Palette each time.