import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import VirtualDraggableGrid from 'react-virtual-draggable-grid';
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});


const ItemComponent = props => {
    const { name, styles } = props;

    return (
        <div
            style={{
                userSelect: 'none',
                border: '1px solid black',
                fontFamily: 'sans-serif',
                background: '#91c6a6',
                ...styles,
            }}
        >
            <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                    width: '100%',
                    height: '60%',
                    fontSize: 18,
                }}
            >
                {`Draggable ${name}!`}
            </p>
            <button
                type="button"
                style={{
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '40%',
                    boxShadow: 'none',
                    borderWidth: '1px 0 0 0',
                    borderStyle: 'solid',
                    borderColor: 'black',
                    background: '#ccc',
                    fontSize: 18,
                }}
                onClick={() => console.log('Clicked without initiating drag', name)}
            >
                {`Prevent Button Drag`}
            </button>
        </div>
    );
};

ItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

ItemComponent.defaultProps = {
    styles: {},
};

class Grid extends React.Component {
    constructor(props) {
        super(props);

        const item = {
            fixedWidth: 200,
            fixedHeight: 200,
            ItemComponent,
            itemProps: {
                styles: {
                    width: '100%',
                    height: '100%',
                },
            },
        };

        const x = 6;
        const y = 6;
        const items = [];
        // Here total amount of cards is 6*6=36

        for (let iY = 0; iY < y; iY += 1) {
            const row = [];
            items.push(row);
            for (let iX = 0; iX < x; iX += 1) {
                const newItem = { ...item };
                const increment = iX + iY * x;
                const key = `item-${increment}`;

                newItem.key = key;
                newItem.itemProps = { ...item.itemProps, name: key };
                newItem.fixedWidth = item.fixedWidth;
                newItem.fixedHeight = item.fixedHeight;

                row.push(newItem);
            }
        }

        this.state = { items };
    }

    // optional; RVDG works as a controlled
    // or an uncontrolled component
    getItems = items => {
        this.setState({ items });
    };

    render() {
        return (
            <div style={{ width: '100vw', height: '100vh', margin: 20 }}>
                <VirtualDraggableGrid
                    items={this.state.items}
                    noDragElements={['button']}
                    gutterX={10}
                    gutterY={10}
                    scrollBufferX={300}
                    scrollBufferY={300}
                    getItems={this.getItems}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Grid);
