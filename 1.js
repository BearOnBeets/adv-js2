fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Output from the api(wait for 5 secs..too much data):")
        // console.log(data)
        actors=[]
        genres=[]
        temp={}
        output={}
        for(i=0;i<data.length;i++)
        {
            for(j=0;j<data[i].cast.length;j++)
            {
                temp["Actor"]=data[i].cast[j]
                temp["Movies"]=data[i].title
                actors.push(Object.assign({},temp))
            } 
            for(j=0;j<data[i].genres.length;j++)
            {
                temp["Type"]=data[i].genres[j]
                temp["Movies"]=data[i].title
                genres.push(Object.assign({},temp))
            } 
        }
        // console.log(actors)
        
        
        var out1 = actors.reduce(function(o, cur) {
            var occurs = o.reduce(function(n, item, i) {
              return (item.Actor === cur.Actor) ? i : n;
            }, -1);
            if (occurs >= 0) {
              o[occurs].Movies = o[occurs].Movies.concat(cur.Movies);
            } else {
              var obj = {
                Actor: cur.Actor,
                Movies: [cur.Movies]
              };
              o = o.concat([obj]);
            }
          
            return o;
        }, []);

        var out2 = genres.reduce(function(o, cur) {
            var occurs = o.reduce(function(n, item, i) {
              return (item.Type === cur.Type) ? i : n;
            }, -1);
            if (occurs >= 0) {
              o[occurs].Movies = o[occurs].Movies.concat(cur.Movies);
            } else {
              var obj = {
                Type: cur.Type,
                Movies: [cur.Movies]
              };
              o = o.concat([obj]);
            }
            return o;
        }, []);

        // console.log(out1);
        // console.log(out2);
        output["Actors"]=out1
        output["Genres"]=out2
        console.log(output);



    })
    .catch(function(err) {
        console.log(err);
      });