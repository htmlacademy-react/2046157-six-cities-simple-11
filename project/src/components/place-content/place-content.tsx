type PlaceContentProps = {
  children: React.ReactNode;
}

function PlaceContent({ children }: PlaceContentProps): JSX.Element {
  return (
    <section className="property">
      {children}
    </section>
  );
}

export default PlaceContent;
