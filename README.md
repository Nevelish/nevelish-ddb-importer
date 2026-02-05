# D&D Beyond Character Importer

A Foundry VTT module that allows you to import characters from D&D Beyond using exported character data.

## Features

- **Easy Import**: Paste character data from D&D Beyond directly into Foundry VTT
- **Automatic Conversion**: Converts D&D Beyond character format to Foundry VTT's DND5e system format
- **Update or Create**: Automatically updates existing characters or creates new ones
- **Complete Character Data**: Imports essential character information including:
  - Ability scores (STR, DEX, CON, INT, WIS, CHA)
  - Hit points (current, max, and temporary)
  - Armor class
  - Movement speed
  - Character level and proficiency bonus
  - Race, background, and alignment
  - Class levels
- **User-Friendly Interface**: Custom dialog with intuitive import workflow
- **Visual Integration**: Adds import button to the Actors Directory for easy access

## Compatibility

- **Minimum Foundry VTT Version**: 11
- **Verified Version**: 13
- **Required System**: DND5e (Dungeons & Dragons 5th Edition)

## Installation

1. In Foundry VTT, go to the "Add-on Modules" tab
2. Click "Install Module"
3. Search for "D&D Beyond Character Importer" or use the manifest URL
4. Click "Install"
5. Enable the module in your world's module settings

## Usage

### Importing a Character

1. Click the "Import from D&D Beyond" button in the Actors Directory header
2. Paste the character data from D&D Beyond (see instructions in the dialog)
3. Click "Import Character"
4. The character will be created or updated in your actors list
5. The character sheet will automatically open

### Notes

- If a character with the same name already exists, it will be updated with the new data
- If no character with that name exists, a new character will be created
- Make sure you're using the correct data format from D&D Beyond

## File Structure

```
ddb-importer/
├── main.js           # Main module script with import logic
├── import.html       # HTML template for import dialog
├── module.css        # Styling for the import interface
├── module.json       # Module manifest and metadata
├── LICENSE           # MIT License
└── README.md         # This file
```

## Technical Details

### Module Components

- **DDBImporterDialog**: Form application class that handles the import dialog UI
- **Character Conversion**: Converts D&D Beyond data format to Foundry VTT actor data
- **Hooks Integration**: Integrates with Foundry VTT's actor directory system

### Data Mapping

The module maps D&D Beyond character data to Foundry VTT's DND5e system:

- Ability scores (1-6 IDs) → STR, DEX, CON, INT, WIS, CHA
- Hit points calculation (base + bonus - removed)
- Alignment IDs (1-9) → Foundry alignment codes
- Proficiency bonus calculation based on character level
- Class levels and multi-classing support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Preben Lysa Heika

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.