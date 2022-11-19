const Card = ({license, disease, cure}) => {
    return (
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="p-6">
          <h4>{license}</h4>
          <h5 className="text-gray-900 text-xl font-medium mb-2">{disease}</h5>
          <p className="text-gray-700 text-base mb-4">
            {cure} 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;