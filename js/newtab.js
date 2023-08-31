const l = [
	["Mona Lisa", "Leonardo da Vinci", 1503, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"], 
	["The Starry Night", "Vincent van Gogh", 1889, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/970px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"], 
	["The Scream", "Edvard Munch", 1893, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/619px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"], 
	["The Night Watch", "Rembrandt van Rijn", 1642, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/917px-The_Night_Watch_-_HD.jpg"], 
	["The Kiss", "Gustav Klimt", 1907, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/765px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"], 
	["The Arnolfini Portrait", "Jan van Eyck", 1434, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/561px-Van_Eyck_-_Arnolfini_Portrait.jpg"], 
	["The Girl With A Pearl Earring", "Johannes Vermeer", 1665, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/656px-Meisje_met_de_parel.jpg"], 
	["Impression, Sunrise", "Claude Monet", 1872, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/990px-Monet_-_Impression%2C_Sunrise.jpg"], 
	["Las Meninas", "Diego Velázquez", 1656, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/667px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg"], 
	["The Creation Of Adam", "Michelangelo", 1512, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1024px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"], 
	["Luncheon Of The Boating Party", "Pierre-Auguste Renoir", 1881, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/1024px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg"], 
	["The Swing", "Jean-Honoré Fragonard", 1767, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg/601px-Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg"], 
	["Liberty Leading The People", "Eugene Delacroix", 1830, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/747px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg"], 
	["Napoleon Crossing The Alps", "Jacques-Louis David", 1801, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/630px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg"], 
	["The Musicians", "Caravaggio", 1595, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Caravaggio_-_I_Musici.jpg/789px-Caravaggio_-_I_Musici.jpg"], 
	["American Gothic", "Grant Wood", 1930, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/636px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"], 
	["Sunday Afternoon On The Island Of La Grande Jatte", "Georges Seurat", 1884, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1024px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg"], 
	["The Sleeping Gypsy", "Henri Rousseau", 1897, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Henri_Rousseau_010.jpg/1024px-Henri_Rousseau_010.jpg"], 
	["The Triumph Of Galatea", "Raphael", 1514, "https://upload.wikimedia.org/wikipedia/commons/6/61/Raphael_Galatea.jpg"], 
	["The Gleaners", "Jean-François Millet", 1857, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg/800px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg"], 
	["Primavera", "Sandro Botticelli", 1480, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1024px-Botticelli-primavera.jpg"], 
	["The Third Of May 1808", "Francisco Goya", 1814, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/777px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg"], 
	["Charles I In Three Positions", "Van Dyck", 1635, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sir_Anthony_Van_Dyck_-_Charles_I_%281600-49%29_-_Google_Art_Project.jpg/917px-Sir_Anthony_Van_Dyck_-_Charles_I_%281600-49%29_-_Google_Art_Project.jpg"], 
	["The Wanderer Above The Sea Of Fog", "Caspar David Friedrich", 1818, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/600px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"], 
	["The (Great) Tower of Babel", "Pieter Bruegel the Elder", 1563, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/800px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg"], 
	["The (Little) Tower of Babel", "Pieter Bruegel the Elder", 1563, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Rotterdam%29_-_Google_Art_Project_-_edited.jpg/959px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Rotterdam%29_-_Google_Art_Project_-_edited.jpg"], 
	["View Of Toledo", "El Greco", 1596, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/View_of_Toledo_MET_DP349564.jpg/679px-View_of_Toledo_MET_DP349564.jpg"], 
	["A Cotton Office In New Orleans", "Edgar Degas", 1873, "https://images.fineartamerica.com/images-medium-large-5/a-cotton-office-in-new-orleans-edgar-degas.jpg"], 
	["Bacchus And Ariadne", "Titian", 1522, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Titian_Bacchus_and_Ariadne.jpg/849px-Titian_Bacchus_and_Ariadne.jpg"], 
	["The Gross Clinic", "Thomas Eakins", 1875, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg/619px-Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg"], 
	["The Ninth Wave", "Ivan Aivazovsky", 1850, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg/1024px-Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg"], 
	["The Last Supper", "Leonardo da Vinci", 1490, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1280px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg"], 
	["St. George And The Dragon", "Paolo Uccello", 1470, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Raphael_-_Saint_George_and_the_Dragon_-_Google_Art_Project.jpg/585px-Raphael_-_Saint_George_and_the_Dragon_-_Google_Art_Project.jpg"], 
	["Mr And Mrs Robert Andrews", "Thomas Gainsborough", 1750, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thomas_Gainsborough_-_Mr_and_Mrs_Andrews.jpg/1024px-Thomas_Gainsborough_-_Mr_and_Mrs_Andrews.jpg"], 
	["Pollice Verso", "Jean-Léon Gérôme", 1872, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jean-Leon_Gerome_Pollice_Verso.jpg/1024px-Jean-Leon_Gerome_Pollice_Verso.jpg"], 
	["The Embarkation for Cythera", "Jean-Antoine Watteau", 1717, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/L%27Embarquement_pour_Cythere%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg/1024px-L%27Embarquement_pour_Cythere%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg"], 
	["Large Bathers", "Paul Cézanne", 1898, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Paul_C%C3%A9zanne%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg/919px-Paul_C%C3%A9zanne%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg"], 
	["The Astronomer", "Johannes Vermeer", 1668, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Johannes_Vermeer_-_The_Astronomer_-_WGA24685.jpg/673px-Johannes_Vermeer_-_The_Astronomer_-_WGA24685.jpg"], 
	["The Fall Of The Damned", "Peter Paul Rubens", 1620, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Peter_Paul_Rubens_063.jpg/597px-Peter_Paul_Rubens_063.jpg"], 
	["A Bar at the Folies-Bergère", "Édouard Manet", 1882, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg/800px-Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg"], 
	["The Storm On The Sea Of Galilee", "Rembrandt van Rijn", 1633, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg/618px-Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg"], 
	["The Laughing Cavalier", "Frans Hals", 1624, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cavalier_soldier_Hals-1624x.jpg/633px-Cavalier_soldier_Hals-1624x.jpg"], 
	["Paris Street In Rainy Weather", "Gustave Caillebotte", 1877, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/792px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg"], 
	["Foxes", "Franz Marc", 1913, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Franz_Marc_-_The_Foxes_-_Google_Art_Project.jpg/575px-Franz_Marc_-_The_Foxes_-_Google_Art_Project.jpg"], 
	["Lady with an Ermine", "Leonardo da Vinci", 1489, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/571px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg"], 
	["Watson And The Shark", "John Singleton Copley", 1778, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Watsonandtheshark-original.jpg/969px-Watsonandtheshark-original.jpg"], 
	["The Ladies Waldegrave", "Sir Joshua Reynolds", 1780, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Sir_Joshua_Reynolds_-_The_Ladies_Waldegrave_-_Google_Art_Project.jpg/899px-Sir_Joshua_Reynolds_-_The_Ladies_Waldegrave_-_Google_Art_Project.jpg"], 
	["Whistler's Mother", "James McNeill Whistler", 1871, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/863px-Whistlers_Mother_high_res.jpg"], 
	["Dance At The Moulin De La Galette", "Pierre-Auguste Renoir", 1876, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg/800px-Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg"], 
	["Breezing Up (A Fair Wind)", "Winslow Homer", 1873, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg/1024px-Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg"], 
	["The Great Wave Off Kanagawa", "Katsushika Hokusai", 1829, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1024px-Tsunami_by_hokusai_19th_century.jpg"], 
	["The Night Café", "Vincent van Gogh", 1888, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/973px-Vincent_Willem_van_Gogh_076.jpg"], 
	["The Avenue In The Rain", "Childe Hassam", 1917, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/The_Avenue_in_the_Rain_Frederick_Childe_Hassam_1917.jpeg/404px-The_Avenue_in_the_Rain_Frederick_Childe_Hassam_1917.jpeg"], 
	["Annunciation", "Leonardo da Vinci", 1472, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Annunciation_%28Leonardo%29.jpg/1024px-Annunciation_%28Leonardo%29.jpg"], 
	["The Ambassadors", "Hans Holbein the Younger", 1533, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg/779px-Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg"], 
	["Flaming June", "Frederic Leighton", 1895, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg/767px-Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg"], 
	["Composition VIII", "Wassily Kandinsky", 1913, "https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg"], 
	["Oath of the Horatii", "Jacques-Louis David", 1784, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/997px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg"], 
	["A Friend In Need", "Cassius Marcellus Coolidge", 1903, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/A_Friend_in_Need_1903_C.M.Coolidge.jpg/1024px-A_Friend_in_Need_1903_C.M.Coolidge.jpg"], 
	["The Barque of Dante", "Eugène Delacroix", 1822, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Eug%C3%A8ne_Delacroix_-_The_Barque_of_Dante.jpg/800px-Eug%C3%A8ne_Delacroix_-_The_Barque_of_Dante.jpg"], 
	["Saturn Devouring His Son", "Francisco Goya", 1819, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/429px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg"], 
	["The Battle of Alexander at Issus", "Albrecht Altdorfer", 1529, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Albrecht_Altdorfer_-_Schlacht_bei_Issus_%28Alte_Pinakothek%2C_M%C3%BCnchen%29.jpg/588px-Albrecht_Altdorfer_-_Schlacht_bei_Issus_%28Alte_Pinakothek%2C_M%C3%BCnchen%29.jpg"], 
	["The Potato Eaters", "Vincent van Gogh", 1885, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/1024px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg"], 
	["Red Balloon", "Paul Klee", 1922, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Paul_Klee%2C_1922%2C_Red_Balloon%2C_oil_on_chalk-primed_gauze%2C_mounted_on_board%2C_31.7_x_31.1_cm%2C_Solomon_R._Guggenheim_Museum.jpg/737px-Paul_Klee%2C_1922%2C_Red_Balloon%2C_oil_on_chalk-primed_gauze%2C_mounted_on_board%2C_31.7_x_31.1_cm%2C_Solomon_R._Guggenheim_Museum.jpg"], 
	["The Lady Of Shalott", "John William Waterhouse", 1888, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project_edit.jpg/781px-John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project_edit.jpg"], 
	["The Skater", "Gilbert Stuart", 1782, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GSskater.jpg/459px-GSskater.jpg"], 
	["The Hay Wain", "John Constable", 1821, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/1024px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"], 
	["The Boating Party", "Mary Cassatt", 1893, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg/782px-Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg"], 
	["Adoration of the Magi", "Gentile da Fabriano", 1423, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gentile_da_fabriano%2C_adorazione_dei_magi.jpg/1024px-Gentile_da_fabriano%2C_adorazione_dei_magi.jpg"], 
	["Portrait Of A Young Man", "Raffaello Sanzio", 1513, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Raphael_missing.jpg/482px-Raphael_missing.jpg"], 
	["Boulevard Montmartre Spring", "Camille Pissarro", 1897, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Camille_Pissarro_-_Boulevard_Montmartre%2C_Spring_-_Google_Art_Project.jpg/963px-Camille_Pissarro_-_Boulevard_Montmartre%2C_Spring_-_Google_Art_Project.jpg"], 
	["The Wedding At Cana", "Paolo Veronese", 1563, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paolo_Veronese_008.jpg/1024px-Paolo_Veronese_008.jpg"], 
	["The Anatomy Lesson Of Dr. Nicolaes Tulp", "Rembrandt", 1632, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/796px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg"], 
	["The Raft Of The Medusa", "Théodore Géricault", 1818, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1024px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg"], 
	["The Kiss", "Francesco Hayez", 1859, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/El_Beso_%28Pinacoteca_de_Brera%2C_Mil%C3%A1n%2C_1859%29.jpg/616px-El_Beso_%28Pinacoteca_de_Brera%2C_Mil%C3%A1n%2C_1859%29.jpg"], 
	["Fort Vimieux", "J. M. W. Turner", 1831, "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Turner_-_Fort_Vimieux.jpg/800px-Turner_-_Fort_Vimieux.jpg"], 
	["Water Lilies and Japanese Bridge", "Claude Monet", 1897, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg/791px-Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg"], 
	["Washington Crossing The Delaware", "Emanuel Leutze", 1851, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/1024px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg"], 
	["The Garden Of Earthly Delights", "Hieronymus Bosch", 1503, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1024px-The_Garden_of_earthly_delights.jpg"], 
	["Supper At Emmaus", "Caravaggio", 1601, "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg/1024px-1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg"], 
	["Feast Of The Rosary", "Albrecht Dürer", 1506, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Albrecht_D%C3%BCrer_-_Feast_of_Rose_Garlands_-_Google_Art_Project.jpg/908px-Albrecht_D%C3%BCrer_-_Feast_of_Rose_Garlands_-_Google_Art_Project.jpg"], 
	["The Hireling Shepherd", "William Holman Hunt", 1851, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/William_Holman_Hunt_001.jpg/1024px-William_Holman_Hunt_001.jpg"], 
	["Hunters In The Snow", "Pieter Bruegel the Elder", 1565, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg/1024px-Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg"], 
	["Barge Haulers On The Volga", "Ilya Repin", 1870, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ilia_Efimovich_Repin_%281844-1930%29_-_Volga_Boatmen_%281870-1873%29.jpg/1024px-Ilia_Efimovich_Repin_%281844-1930%29_-_Volga_Boatmen_%281870-1873%29.jpg"], 
	["Cardsharps", "Caravaggio", 1594, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Caravaggio_%28Michelangelo_Merisi%29_-_The_Cardsharps_-_Google_Art_Project.jpg/1024px-Caravaggio_%28Michelangelo_Merisi%29_-_The_Cardsharps_-_Google_Art_Project.jpg"], 
	["The Pont Du Gard", "Hubert Robert", 1786, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pont-du-gard-hubert-robert-1786.jpg/606px-Pont-du-gard-hubert-robert-1786.jpg"], 
	["The Luncheon On The Grass", "Édouard Manet", 1863, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/989px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg"]
];

window.onload = () => {
   const stop = Date.now() % l.length;
   const img = new Image();
   img.src = l[stop][3];
   const int = setInterval(() => {
      if (img.complete) {
         clearInterval(int);
         document.getElementById('artwork').src = l[stop][3];
         document.getElementById('desc').innerHTML = `<b>${l[stop][0]}</b><br>${l[stop][1]}<br>${l[stop][2]}`;
      }
   }, 50);
}

