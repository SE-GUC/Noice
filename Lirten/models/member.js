const uuid = require("uuid");

class member {
  constructor(
    name,
    age,
    gender,
    address,
    email,
    phone_number,
    skills,
    interests,
    past_events,
    projects_completed,
    reviews_received,
    certificaes_held
  ) {
    this.id = uuid.v4();

    this.name = name;

    this.age = age;

    this.gender = gender;

    this.address = address;

    this.email = email;

    this.phone_number = phone_number;

    this.skills = skills;

    this.interests = interests;

    this.past_events = past_events;

    this.projects_completed = projects_completed;

    this.reviews_received = reviews_received;

    this.certificaes_held = certificaes_held;
  }
}

module.exports = member;
