function abbrevName(name) {
  const [firstName, lastName] = name.split(" ");
  const firstInitial = firstName.charAt(0).toUpperCase();
  const secondInitial = lastName.charAt(0).toUpperCase();
  return firstInitial + "." + secondInitial;
}

abbrevName("Sam Harris");
