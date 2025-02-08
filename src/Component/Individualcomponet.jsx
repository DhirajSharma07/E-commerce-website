import React from 'react';

function Individualcomponet() {
  return (
    <>
      <div className="grid gap-4" id='Individualcomponet'>
        <div>
          <a href="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" target="_blank" rel="noopener noreferrer">
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="Featured"/>
          </a>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i}>
              <a 
                href={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${i + 1}.jpg`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${i + 1}.jpg`} 
                  alt={`Gallery Image ${i + 1}`} 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Individualcomponet;
