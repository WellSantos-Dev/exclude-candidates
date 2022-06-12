export const Candidate = ({candidate, name, id, image, location, tecnology, excludeCandidates}) => {

  return (
      <div className="flex w-84 m-4 p-6 rounded-md hover:shadow-xl cursor-pointer" onClick={() => excludeCandidates(id)}>
        <div className="rounded-full h-24 w-24 bg-cover bg-center mr-4" style={{backgroundImage: `url(${image})`}}></div>
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm font-medium">{location}</p>
          <div className="flex mr-4">
            {tecnology.map((tec) => (
              <div className="flex" key={tec}>
                <a className="pt-0.5 pb-0.5 pl-2 pr-2 border-blue-300 border text-blue-900 mr-1 rounded-3xl mt-4">{tec}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}