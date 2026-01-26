import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        onNameChange(symbol, playerName);

        if (isEditing) {
            onNameChange(symbol, playerName);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className='playername'>{playerName}</span>;

        if (isEditing) {
            editablePlayerName = (
            <input type="text" value={playerName} onChange={handleChange} />);
    }

    return ( 
    <li className={isActive ? "active-player" : undefined}>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>Edit</button>
      </li>
    );
}