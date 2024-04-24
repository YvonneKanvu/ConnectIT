function AvisClients() {
  return (
    <div className="">
      <p className="text-xl font-bold mt-20">
        Ce que nos clients disent de nous
      </p>
      <div className="flex gap-3">
        <div className="bg-blue-300  h-32 p-4 text-black">
          <p>
            Je tiens à vous rémercier sincèrement pour votre service excellent
          </p>
        </div>
        <div className="bg-blue-200  h-32 p-4 text-black">
          <p>
            J'ai été particulièrement impressionné par la rapidité avec la
            quelle vous avez résolu mon problème
          </p>
        </div>
        <div className="bg-blue-100  h-32 p-4 text-black">
          <p>je n'hésiterai pas à vous recommander à d'autres personnes</p>
        </div>
      </div>
    </div>
  );
}

export default AvisClients;
