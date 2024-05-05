import { useState } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../../redux/store";
import { useAppDispatch } from "../../../redux/store";
import { partsActions } from "../PartItem/PartsSlice";

const MainPage = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");
  const [vin, setVin] = useState("");
  const [articul, setArticul] = useState("");
  const [count, setCount] = useState(0);

  const user = useSelector((store: RootState) => store.auth.user);
  const cars = useSelector((store: RootState) => store.cars.cars);

  const dispatch = useAppDispatch();

  console.log(cars, "cars");

  return (
    <main>
      {user?.isAdmin ? (
        <>
          <section>
            <form
              action="submit"
              className="formAddPart"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  partsActions.addPart({
                    brand,
                    price,
                    photo,
                    vin,
                    articul,
                    count,
                  })
                ).catch((err) => console.log(err));
              }}
            >
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
              />
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo"
              />
              <select
                name="vin"
                id="vin"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              >
                {cars.map((car) => (
                  <option value={car.vin} key={car.id}>
                    {`${car.brand} ${car.model}`}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
              />
              <input
                type="text"
                value={articul}
                onChange={(e) => setArticul(e.target.value)}
                placeholder="Articul"
              />
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                placeholder="Count"
              />
              <button type="submit">Add</button>
            </form>
          </section>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default MainPage;
