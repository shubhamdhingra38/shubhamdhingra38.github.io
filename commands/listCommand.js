class ListCommand extends Command {

  resetLastElementID() {
    if (this.terminal.lastElementChild) {
      this.terminal.lastElementChild.id = "";
    }
  }

  /**
   * List directory, current directory or given directory.
   * Does not support listing nested directory yet.
   * @param {string} directoryName Name of directory
   */
  execute(directoryName) {
    this.resetLastElementID();
    try {
      let elementsInDirectory;
      if (directoryName) {
        directoryName = Directory.removeTrailingSlash(directoryName);
        elementsInDirectory = this.terminal.getElementsInDirectory(directoryName);
      } else {
        elementsInDirectory = this.terminal.currentDirectory.listDirectory();
      }
      elementsInDirectory.forEach((ele) => {
        const renderDiv = ele.render();
        this.terminal.addDiv(renderDiv);
      });
    }
    catch (err) {
      console.error(err);
      this.terminal.showError(err.message);
    }
    this.terminal.addLine("\n");
  }
}
