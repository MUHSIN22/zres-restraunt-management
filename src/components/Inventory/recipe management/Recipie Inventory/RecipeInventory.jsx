import React, { useState } from "react";
import "./recipeInventory.scss";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Rating from "./ratting/Ratting";
import AddIcon from "@mui/icons-material/Add";
import ImageUploader from "./image uploader/ImageUploader";
import CloseIcon from "@mui/icons-material/Close";
import RichTextEditor from "./richtext editor/RichTextEditor";

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RecipeInventory() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // ingredient select section

  const [selectIngredient, setSelectIngredient] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [selectUnit, setSelectUnit] = useState("");
  const [newArray, setNewArray] = useState([]);
  const onAddnewRecipeIngredient = () => {
    setNewArray([
      ...newArray,
      {
        id: newArray.length,
        selectIngredient: selectIngredient,
        ingredientInput: ingredientInput,
        selectUnit: selectUnit,
      },
    ]);
    setSelectIngredient("");

    setIngredientInput("");
    setSelectUnit("");
  };

  return (
    <div className="RecipeInventory">
      <div className="top__section">
        <div className="headder__headding__section">
          <h2>Recipe Details</h2>
        </div>
      </div>

      <div className="body__section">
        <div className="inner__container">
          <div className="top__section">
            <div className="left__Section">
              <div className="headding__sections">
                <h3>Recipe Inventory</h3>
              </div>
              <div className="input__Section">
                <div className="input__holder">
                  <h5>Name of Dish</h5>
                  <input type="text" />
                </div>

                <div className="input__holder">
                  <h5>Prep Time</h5>
                  <input type="text" />
                </div>
                <div className="input__holder">
                  <h5>Cook Time</h5>
                  <input type="text" />
                </div>

                <div className="input__holder">
                  <h5>Cooking Temp</h5>
                  <input type="text" />
                </div>

                <div className="input__holder">
                  <h5>Tools and utensils</h5>
                  <FormControl sx={{ m: 1, width: 255 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Tools and utensils
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Tools and utensils" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="difficultey__section">
                <h3>Difficulty</h3>
                <Rating />
              </div>
              <div className="checkbox__section">
                <div className="checkbox__main__container">
                  <div className="checkbox__container">
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                    <h4>Dairy free</h4>
                  </div>
                  <div className="checkbox__container">
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                    <h4>Gluten free</h4>
                  </div>
                  <div className="checkbox__container">
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                    <h4>Vegitarian</h4>
                  </div>
                  <div className="checkbox__container">
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                    <h4>Low carb</h4>
                  </div>
                  <div className="checkbox__container">
                    <Checkbox
                      {...label}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                    <h4>High fat</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="right__section">
              <div className="imagee__slidess">
                <ImageUploader />
              </div>
              <div className="ingredient__section">
                <div className="ingredient__top__section">
                  <div className="input__Section">
                    <h4>Ingredients</h4>
                    <select
                      name=""
                      id=""
                      value={selectIngredient}
                      onChange={(e) => setSelectIngredient(e.target.value)}
                    >
                      <option value="">select</option>
                      <option value="Salt">Salt</option>
                      <option value="Onion">Onion</option>
                      <option value="Ginger">Ginger</option>
                      <option value="Oil">Oil</option>
                      <option value="Oil">Oil</option>
                    </select>

                    <input
                      type="text"
                      value={ingredientInput}
                      onChange={(e) => setIngredientInput(e.target.value)}
                    />

                    <select
                      class="select__units"
                      name=""
                      id=""
                      value={selectUnit}
                      onChange={(e) => setSelectUnit(e.target.value)}
                    >
                      <option value="">select</option>
                      <option value="kg">kg</option>
                      <option value="liter">liter</option>
                      <option value="ml">ml</option>
                      <option value="gram">gram</option>
                      <option value="pounds">pounds</option>
                    </select>

                    <div
                      className="add__btn__section"
                      onClick={() => onAddnewRecipeIngredient()}
                    >
                      <AddIcon />
                    </div>

                    <div className="deletbtn__sction">
                      <CloseIcon />
                    </div>
                  </div>
                </div>
                <div className="ingredient__bottom__section">
                  <div className="bottom__section__wrapper">
                    <ul>
                      {newArray.map((items) => (
                        <li>
                          {items.ingredientInput} {items.selectUnit}{" "}
                          {items.selectIngredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom__section">
            <h3>Preprations</h3>

            <div className="rich__text__Section__wrapperss">
              {/* <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="how is the Preprations done"
              ></textarea> */}

              <RichTextEditor />
            </div>

            <div className="button__Section">
              <button>Save</button>

              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeInventory;
