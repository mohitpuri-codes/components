import { useRef } from "react";

function OTPValidator({ length = 4 }: { length: number }) {
  // const ref1 = useRef<HTMLInputElement>(null);
  // const ref2 = useRef<HTMLInputElement>(null);
  // const ref3 = useRef<HTMLInputElement>(null);
  // const ref4 = useRef<HTMLInputElement>(null);

  const inputrefs = useRef<HTMLInputElement[]>([]);

  function handleChange(index: number) {
    if (inputrefs.current) {
      const currentRef = inputrefs.current[index];
      const nextRef = inputrefs.current[index + 1];
      if (currentRef.value && nextRef) {
        nextRef.focus();
      }
    }
  }

  // function handleChange() {
  //   if (ref1.current?.value) {
  //     ref2.current?.focus();
  //   }
  //   if (ref2.current?.value) {
  //     ref3.current?.focus();
  //   }
  //   if (ref3.current?.value) {
  //     ref4.current?.focus();
  //   }
  // }

  return (
    <>
      {Array.from({ length }).map((item, index) => (
        <input
          type="number"
          ref={(refer) => {
            if (refer) inputrefs.current![index] = refer;
          }}
          autoFocus={index === 0}
          onChange={() => handleChange(index)}
        />
      ))}
      {/* <input type="number" ref={ref1} autoFocus onChange={handleChange} />
      <input type="number" ref={ref2} autoFocus onChange={handleChange} />
      <input type="number" ref={ref3} autoFocus onChange={handleChange} />
      <input type="number" ref={ref4} autoFocus onChange={handleChange} /> */}
    </>
  );
}

export default OTPValidator;
