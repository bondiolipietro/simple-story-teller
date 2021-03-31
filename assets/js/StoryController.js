class StoryController {
  constructor(storyObject, storyContainerClass, storyImageContainerClass) {
    this.storyObject = storyObject;
    this.storyContainer = document.querySelector(storyContainerClass);
    this.storyImageContainer = document.querySelector(storyImageContainerClass);
    this.currentStoryFrame = 0;
    this.storyQueue = undefined;
    this.displayStoryLoop = undefined;
  }

  tellFrameStory() {
    this.storyContainer.innerHTML = "";
    this.storyQueue = this.storyObject[this.currentStoryFrame].story.split("");
    this.changeImage();
    this.displayStory(this);
  }

  displayStory(self) {
    if (self.displayStoryLoop) clearTimeout(self.displayStoryLoop);

    self.storyContainer.innerHTML += self.storyQueue.shift();
    if (self.storyQueue.length > 0) {
        self.displayStoryLoop = setTimeout(
        self.displayStory,
        70,
        self
      );
    }
  }

  changePageTitle() {
    document.title = this.storyObject.title;
  }

  changeImage() {
    this.storyImageContainer.src = this.storyObject[this.currentStoryFrame].imagePath;
  }

  initialStoryFrame() {
    this.currentStoryFrame = 0;
    this.tellFrameStory();
  }

  nextStoryFrame() {
    if (this.doesFrameExists(this.currentStoryFrame + 1)) {
        this.currentStoryFrame++;
    }
    this.tellFrameStory();
  }

  previousStoryFrame() {
    if (this.doesFrameExists(this.currentStoryFrame - 1)) {
        this.currentStoryFrame--;
    }
    this.tellFrameStory();
  }

  doesFrameExists(frameNumber) {
    if(this.storyObject[frameNumber]) return true;
    return false;
  }
}
