# Lyrics_Analyzer

https://jeffreybox.github.io/Lyrics_Analyzer/index.html

This project uses standard Python libraries, regression tactics, and API calls to analyze music lyrics. The database of songs was determined by utilizing Billboard charts over a period of 50 years (since Billboard's inception in 1968). Billboard's data was obtained using Allen Guo's Python API. Next, minor data munging and API calls were needed to grab lyrics for analysis. MusixMatch is a freemium service used to obtain song lyrics. The project utilized Hudson Brendon's Python Api to pull the lyrics. Finally, the lyrics were cleaned, flattened, and analyzed using VaderSentiment. Keep in mind that this library is specifically tuned to analyze social media; however, testing proved its flexibility in application to music. The results were conclusive although not surprising: Lyrics in popular music are becoming more "negative" over time. See the results for each Vader sentiment in the "Plots" menu and a side-by-side in the "Comparison" menu. The data from the final trial (Aug 14, 2018) is included (warning: explicit lyrical content) alongside the Github source link. The workflow is noted on the site and in presentation.

~ Created for Georgia Tech Data Science 2018 Bootcamp ~
