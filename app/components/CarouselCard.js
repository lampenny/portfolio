export default function CarouselCard({ data, hasDemo, isFullStack }) {
  return (
    <div className="w-full h-full flex flex-row text-black font-bold px-10">
      <div className="w-1/2 flex flex-col justify-center">
        <div className="bg-white bg-opacity-80 flex flex-col gap-y-5 rounded-lg p-5">
          <div>
            <h2 className="text-2xl">{data.title}</h2>
            <p className="text-gray-600">{data.stack}</p>
          </div>
          <p>{data.description}</p>

          {hasDemo ? (
            <div>
              <a
                className="hover:underline hover:underline-offset-4"
                href={data.url_demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>{" "}
              |{" "}
              <a
                className="hover:underline hover:underline-offset-4"
                href={data.url_code}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          ) : (
            <div>
              {isFullStack ? (
                <>
                  <p>Code</p>
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href={data.url_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FRONT END
                  </a>{" "}
                  |{" "}
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href={data.url_code_b}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BACK END
                  </a>
                </>
              ) : (
                <div>
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href={data.url_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="scale-125 w-1/2 items-center justify-center self-center -z-10">
        <img src={data.image} />
      </div>
    </div>
  );
}
