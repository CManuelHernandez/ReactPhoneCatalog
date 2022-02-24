import React from "react";

export const PhonesPage = () => {
  const [phone, setPhones] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const url = "http://localhost:3000/phones";
    const resp = await fetch(url);
    const results = await resp.json();

    const apiPhones = results.map((phone) => {
      return {
        id: phone.id,
        name: phone.name,
        manufacturer: phone.manufacturer,
        description: phone.description,
        color: phone.color,
        price: phone.price,
        imageFileName: phone.imageFileName,
        screen: phone.screen,
        processor: phone.processor,
      };
    });
    setPhones(apiPhones);
  };

  return (
    <>
      <h2>REACT - Phone Catalog</h2>
      <ol>
        {phone.map((phone) => (
          <li key={phone.id}>
            Nombre: {phone.name} Manufacturer: {phone.manufacturer} Description:
            {phone.description} Color: {phone.color} Price: {phone.price}
            ImageFileName: {phone.imageFileName} Screen: {phone.screen}{" "}
            Processor: {phone.processor}
          </li>
        ))}
      </ol>
    </>
  );
};
