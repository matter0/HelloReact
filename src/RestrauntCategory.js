const RestrauntCategory = ({data}) => {

    return(
        <div>
            {/* Header */ }
            <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 flex justify-between">
            <span className="font-bold text-lg">{data.title}</span>
           <span> / </span>

            </div>

           {/* Footer */} 
        </div>
    );
};

export default RestrauntCategory;