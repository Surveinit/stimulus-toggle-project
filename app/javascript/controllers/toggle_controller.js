import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "content" ]

  // toggle() {
  //   this.contentTarget.classList.toggle("hidden")
  // }

  toggle() {
    this.contentTargets.forEach(target => {
      target.classList.toggle("hidden")
    })
  }
}
