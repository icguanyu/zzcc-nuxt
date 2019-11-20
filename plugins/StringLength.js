import Vue from "vue";

function StringLength(string, len) {
  if (string.length > len) {
    let slice = string.substring(0, len);
    return slice + "...";
  } else {
    return string;
  }
}

Vue.filter("StringLengthFilter", StringLength);
