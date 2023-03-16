import { Checkbox, Typography, Link } from "@mui/joy";
import PropTypes from "prop-types";

function Item({ item, toggleComplete, deleteTodo }) {
  return (
    <tr>
      <td style={{ width: 48 }}>
        <Checkbox
          checked={item.completed}
          onChange={(e) => toggleComplete(item.id)}
          sx={{ verticalAlign: "text-bottom" }}
        />
      </td>
      <td>
        <Typography
          sx={() => ({
            textDecorationLine: item.completed ? "line-through" : "none"
          })}
        >
          {item.title}
        </Typography>
      </td>
      <td style={{ width: 100, textAlign: "center" }}>
        <Link color="danger" onClick={(e) => deleteTodo(item.id)}>
          Delete
        </Link>
      </td>
    </tr>
  );
}

Item.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Item;
