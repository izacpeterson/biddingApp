/** @format */

class app {
  constructor(bids) {
    this.bids = [];
  }
  add(bid) {
    this.bids.push(bid);
    this.save();
    document.getElementById("bidder1").value = "";
    document.getElementById("bidder2").value = "";
  }
  save() {
    let jsonData = { bids: this.bids };
    localStorage.setItem("bids", JSON.stringify(jsonData));
    this.print();
  }
  load() {
    let jsonData = JSON.parse(localStorage.getItem("bids"));
    if (jsonData) this.bids = jsonData.bids;
    this.print();
  }
  print() {
    let bidDOM = document.getElementById("bidList");
    bidDOM.innerHTML = "";
    this.bids.forEach((bid, index) => {
      if (index === this.bids.length - 1) {
        bidDOM.innerHTML += `<li class="highestBid">$${bid}</li>`;
      } else {
        bidDOM.innerHTML += `<li>$${bid}</li>`;
      }
    });
  }
  clear() {
    localStorage.clear();
    this.bids = [];
    this.load();
    this.print();
  }
}

let bidding = new app();
bidding.load();
