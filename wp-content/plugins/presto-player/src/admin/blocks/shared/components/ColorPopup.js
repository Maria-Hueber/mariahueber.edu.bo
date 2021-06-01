/** @jsx jsx */
const { ColorPicker, ColorIndicator, Popover, Button, Flex } = wp.components;
const { useState, useEffect } = wp.element;
import { css, jsx } from "@emotion/core";

export default ({ color, setColor }) => {
  const [open, setOpen] = useState(false);
  const [original, setOriginal] = useState(color);

  useEffect(() => {
    if (open && color) {
      setOriginal(color);
    }
  }, [open]);

  return (
    <span>
      <ColorIndicator
        css={{ width: "25px", height: "25px", borderRadius: "9999px" }}
        colorValue={color}
        onClick={() => setOpen(!open)}
      />
      {!!open && (
        <Popover position="bottom left">
          <ColorPicker
            color={color || ""}
            onChangeComplete={(value) => value?.hex && setColor(value)}
            disableAlpha
          />
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <Button
              css={{ margin: "0 5px" }}
              isTertiary
              onClick={() => {
                setColor({ hex: null });
                setOpen(false);
              }}
            >
              Reset
            </Button>
            <div
              css={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <Button
                css={{ margin: "0 5px" }}
                isTertiary
                onClick={() => {
                  setColor({ hex: original });
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button isPrimary onClick={() => setOpen(false)}>
                Apply
              </Button>
            </div>
          </div>
        </Popover>
      )}
    </span>
  );
};
